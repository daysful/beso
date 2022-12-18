// #region imports
    // #region libraries
    import gql from 'graphql-tag';
    // #endregion libraries
// #endregion imports



// #region module
export const BETSE_SIMULATION_FRAGMENT = gql`
    fragment BetseSimulationFields on BetseSimulation {
        id
        name
        initTimeSettings {
            timeStep
            totalTime
            samplingRate
        }
        simTimeSettings {
            timeStep
            totalTime
            samplingRate
        }
        generalOptions {
            compGridSize
            simulateExtracellularSpaces
            ionProfile
            customizedIonProfile {
                extracellularNaConcentration
                extracellularKConcentration
                extracellularClConcentration
                extracellularCa2Concentration
                extracellularProteinConcentration
                cytosolicNaConcentration
                cytosolicKConcentration
                cytosolicClConcentration
                cytosolicCa2Concentration
                cytosolicProteinConcentration
            }
        }
        variableSettings {
            envBoundaryConcentrations
            temperature
            deformation {
                turnOn
                galvanotropism
                viscousDamping
                fixedClusterBoundary
                youngModulus
            }
            pressures {
                includeElectrostaticPressure
                includeOsmoticPressure
                membraneWaterConductivity
            }
            noise {
                staticNoiseLevel
                dynamicNoise
                dynamicNoiseLevel
            }
            gapJunctions {
                gapJunctionSurfaceArea
                voltageSensitiveGj
                gjVoltageThreshold
                gjVoltageWindow
                gjMinimum
            }
            tightJunctionScaling
            tightJunctionRelativeDiffusion {
                Na
                K
                Cl
                Ca
                M
                P
            }
            adherensJunctionScaling
            use_GoldmanCalculator
        }
        world
        tissues
        interventions
        modulators
        networks
        biomolecules
        reactions
        channels
    }
`;


export const BETSE_WORLD_FRAGMENT = gql`
    fragment BetseWorldFields on BetseWorld {
        id
        name
        worldSize
        cellRadius
        cellHeight
        cellSpacing
        simulateSingleCell
        latticeType
        latticeDisorder
        meshRefinement {
            refineMesh
            maximumSteps
            convergenceThreshold
        }
        importFromSvg {
            svgOverride
            cellsFromSvg
            svgSize
        }
        alphaShape
        useCenters
    }
`;


export const BETSE_TISSUE_FRAGMENT = gql`
    fragment BetseTissueFields on BetseTissue {
        id
        name
        insular
        diffusionConstants {
            DmNa
            DmK
            DmCl
            DmCa
            DmM
            DmP
        }
        cellTargets {
            type
            color
            image
            indices
            percent
        }
    }
`;


export const BETSE_INTERVENTION_FRAGMENT = gql`
    fragment BetseInterventionFields on BetseIntervention {
        id
        name

    }
`;


export const BETSE_FUNCTION_FRAGMENT = gql`
    fragment BetseFunctionFields on BetseFunction {
        id
        name
        gradientX {
            slope
            xOffset
            zOffset
            exponent
        }
        gradientY {
            slope
            xOffset
            zOffset
            exponent
        }
        gradientR {
            slope
            xOffset
            zOffset
            exponent
        }
        periodic {
            frequency
            phase
        }
        fSweep {
            startFrequency
            endFrequency
        }
        gradientBitmap {
            file
            zOffset
        }
        singleCell {
            zOffset
        }
    }
`;


export const BETSE_NETWORK_FRAGMENT = gql`
    fragment BetseNetworkFields on BetseNetwork {
        id
        name
        enableMitochondria
        optimization {
            optimizeNetwork
            optimizationSteps
            optimizationMethod
            optimizationT
            optimizationStep
            targetVmem
        }
        timeDilationFactor
        resetMicrotubules
        recalculateFluid
    }
`;


export const BETSE_BIOMOLECULE_FRAGMENT = gql`
    fragment BetseBiomoleculeFields on BetseBiomolecule {
        id
        name
        Dm
        Do
        Dgj
        MuMem
        uMtube
        z
        envConc
        cellConc
        mitConc
        transmem
        updateIntracellular
        initialAsymmetry
        TJPermeable
        GJImpermeable
        TJFactor
        ignoreEcm
        scaleFactor
        useTimeDilation
        growthAndDecay {
            productionRate
            decayRate
            applyTo
            modulatorFunction
            activators
            KmActivators
            nActivators
            inhibitors
            KmInhibitors
            nInhibitors
        }
        ionChannelGating {
            channelName
            ionChannelTarget
            targetHillCoefficient
            targetHillExponent
            peakChannelOpening
            actsExtracellularly
            activators
            KmActivators
            nActivators
            zoneActivators
            inhibitors
            KmInhibitors
            nInhibitors
            zoneInhibitors
        }
        activePumping {
            turnOn
            pumpToCell
            maximumRate
            pumpKm
            usesAtp
        }
        changeAtBounds {
            eventHappens
            changeStart
            changeFinish
            changeRate
            concentration
        }
        plotting {
            plot2d
            animate
            autoscaleColorbar
            maxVal
            minVal
        }
    }
`;


export const BETSE_REACTION_FRAGMENT = gql`
    fragment BetseReactionFields on BetseReaction {
        id
        name
        reactionZone
        reactantMultipliers
        KmReactants
        products
        productMultipliers
        KmProducts
        maxRate
        standardFreeEnergy
        reactionActivators
        activatorKm
        activatorN
        activatorZone
        reactionInhibitors
        inhibitorKm
        inhibitorN
        inhibitorZone
    }
`;


export const BETSE_CHANNEL_FRAGMENT = gql`
    fragment BetseChannelFields on BetseChannel {
        id
        name
        channelClass
        channelType
        maxDm
        applyTo
        initActive
        channelActivators
        activatorKm
        activatorN
        activatorZone
        activatorMax
        channelInhibitors
        inhibitorKm
        inhibitorN
        inhibitorZone
        inhibitorMax
    }
`;


export const BETSE_TRANSPORTER_FRAGMENT = gql`
    fragment BetseTransporterFields on BetseTransporter {
        id
        name
        reactionZone
        reactants
        reactantMultipliers
        KmReactants
        products
        productMultipliers
        KmProducts
        transferedOutOfCell
        transferedIntoCell
        maxRate
        standardFreeEnergy
        applyTo
        ignoreEcm
        transporterActivators
        activatorKm
        activatorN
        transporterInhibitors
        inhibitorKm
        inhibitorN
    }
`;


export const BETSE_MODULATOR_FRAGMENT = gql`
    fragment BetseModulatorFields on BetseModulator {
        id
        name
        target
        maxEffect
        targetIon
        activators
        activatorKm
        activatorN
        activatorZone
        inhibitors
        inhibitorKm
        inhibitorN
        inhibitorZone
    }
`;
// #endregion module
