import threading
import time
import atexit



class RepeatedTimer(object):
    def __init__(self, interval, function, *args, **kwargs):
        self._timer = None
        self.interval = interval
        self.function = function
        self.args = args
        self.kwargs = kwargs
        self.is_running = False
        self.next_call = time.time()
        self.start()

        atexit.register(self.stop)

    def _run(self):
        self.is_running = False
        self.start()
        self.function(*self.args, **self.kwargs)

    def start(self):
        if self.is_running:
            return

        self.next_call += self.interval
        if self._timer:
            self._timer.cancel()
            self._timer = None
        self._timer = threading.Timer(self.next_call - time.time(), self._run)
        self._timer.daemon = True
        self._timer.start()
        self.is_running = True

    def stop(self):
        self._timer.cancel()
        self._timer = None
        self.is_running = False
