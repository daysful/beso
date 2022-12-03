// #region imports
    // #region libraries
    import React, {
        useState,
    } from 'react';

    import {
        AnyAction,
        ThunkDispatch,
    } from '@reduxjs/toolkit';
    import { connect } from 'react-redux';


    import {
        Theme,
    } from '@plurid/plurid-themes';

    import {
        DispatchAction,
    } from '@plurid/plurid-ui-state-react';
    // #endregion libraries


    // #region external
    import besoLogo from '../../assets/beso-logo.png';

    import {
        PluridInputLine,
        PluridPureButton,
        PluridLinkButton,
    } from '~kernel-services/styled';

    import client from '~kernel-services/graphql/client';

    import {
        LOGIN_USER,
        REGISTER_USER,
    } from '~kernel-services/graphql/mutate';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledLogin,
        StyledLoginButtons,
        StyledLoginButton,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface LoginOwnProperties {
}

export interface LoginStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateAllowUserRegistration: boolean;
}

export interface LoginDispatchProperties {
    dispatchSetGeneralField: DispatchAction<typeof actions.general.setGeneralField>;
}

export type LoginProperties =
    & LoginOwnProperties
    & LoginStateProperties
    & LoginDispatchProperties;


const Login: React.FC<LoginProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region state
        stateGeneralTheme,
        stateInteractionTheme,
        stateAllowUserRegistration,
        // #endregion state

        // #region dispatch
        dispatchSetGeneralField,
        // #endregion dispatch
    } = properties;
    // #endregion properties


    // #region state
    const [
        loggingIn,
        setLoggingIn,
    ] = useState(true);

    const [
        identonym,
        setIdentonym,
    ] = useState('');
    const [
        key,
        setKey,
    ] = useState('');
    const [
        error,
        setError,
    ] = useState('');
    // #endregion state


    // #region handlers
    const login = async () => {
        try {
            setError('');

            if (!identonym || !key) {
                setError('identonym and key required.');
                return;
            }

            const variables = {
                identonym,
                key,
            };

            const mutationType = loggingIn ? LOGIN_USER : REGISTER_USER;

            const mutation = await client.mutate({
                mutation: mutationType,
                variables,
            });

            const responseType = loggingIn ? 'loginUser' : 'registerUser';
            const response = mutation.data[responseType];
            if (!response) {
                setError('something is wrong. try again.');
                return;
            }

            setIdentonym('');
            setKey('');

            dispatchSetGeneralField({
                field: 'identonym',
                value: response.name,
            });
        } catch (error) {
            return;
        }
    }

    const handleEnter = (
        event: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        if (event.key === 'Enter') {
            login();
        }
    }
    // #endregion handlers


    // #region render
    return (
        <StyledLogin
            theme={stateGeneralTheme}
        >
            <div>
                <img
                    src={besoLogo}
                    alt="beso logo"
                    height={150}
                />
            </div>

            <h1>
                beso
            </h1>

            <h2>
                BioElectric Simulation Orchestrator
            </h2>

            <StyledLoginButtons>
                <PluridInputLine
                    text={identonym}
                    name="identonym"
                    theme={stateInteractionTheme}
                    atChange={(event) => setIdentonym(event.target.value)}
                    atKeyDown={(event) => handleEnter(event)}
                />

                <PluridInputLine
                    text={key}
                    name="key"
                    type="password"
                    theme={stateInteractionTheme}
                    atChange={(event) => setKey(event.target.value)}
                    atKeyDown={(event) => handleEnter(event)}
                />

                <div
                    style={{
                        minHeight: '30px',
                        marginTop: '2rem',
                    }}
                >
                    {error}
                </div>
            </StyledLoginButtons>

            <StyledLoginButton>
                <PluridPureButton
                    text={loggingIn ? 'Login' : 'Register'}
                    atClick={() => login()}
                    theme={stateInteractionTheme}
                    level={2}
                    disabled={!identonym || !key}
                />
            </StyledLoginButton>

            {stateAllowUserRegistration && (
                <StyledLoginButton>
                    <PluridLinkButton
                        text={loggingIn ? 'register' : 'login'}
                        atClick={() => {
                            setLoggingIn(value => !value);
                        }}
                        theme={stateGeneralTheme}
                    />
                </StyledLoginButton>
            )}
        </StyledLogin>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): LoginStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateAllowUserRegistration: selectors.general.getGeneral(state).allowUserRegistration,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): LoginDispatchProperties => ({
    dispatchSetGeneralField: (
        payload,
    ) => dispatch(
        actions.general.setGeneralField(payload),
    ),
});


const ConnectedLogin = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Login);
// #endregion module



// #region exports
export default ConnectedLogin;
// #endregion exports
