import subprocess
import uuid
import os
import shlex


def run_c(code, flags):
    """Runs C code."""

    executable = str(uuid.uuid4())
    filename = executable + ".c"

    f = open(filename, "w+")
    f.write(code)
    f.close()
    p = subprocess.Popen(["gcc", "-o", executable, filename], stdout=subprocess.PIPE)
    p.wait()
    p = subprocess.Popen(["./" + executable] + shlex.split(flags, posix=True), stdout=subprocess.PIPE)
    p.wait()
    result = p.stdout.read().decode("utf-8")

    # clean up
    os.remove(filename)
    os.remove(executable)

    return result


def run_python(code, flags):
    """Runs Python code."""

    filename = str(uuid.uuid4()) + ".py"

    f = open(filename, "w+")
    f.write(code)
    f.close()
    p = subprocess.Popen(["python", filename] + shlex.split(flags, posix=True), stdout=subprocess.PIPE)
    p.wait()
    result = p.stdout.read().decode("utf-8")

    # clean up
    os.remove(filename)

    return result