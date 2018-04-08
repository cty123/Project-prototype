import subprocess
import uuid
import os
import shlex


def run_c(code, filename, flags):
    """Runs C code."""

    if filename:
        executable = filename[:-2]
    else:
        executable = str(uuid.uuid4())
        filename = executable + ".c"

    f = open(filename, "w+")
    f.write(code)
    f.close()
    p = subprocess.Popen(["gcc", "-o", executable, filename], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    p.wait()
    compile_output = p.stdout.read().decode("utf-8")
    compile_error = p.stderr.read().decode("utf-8")
    result = "COMPILE OUTPUT:\n\n" + compile_output + "\n\nCOMPILE ERROR:\n\n" + compile_error + "\n\n"

    if os.path.isfile(executable):
        p = subprocess.Popen(["./" + executable] + shlex.split(flags, posix=True), stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        p.wait()
        run_output = p.stdout.read().decode("utf-8")
        run_error = p.stderr.read().decode("utf-8")
        result += "EXECUTION OUTPUT:\n\n" + run_output + "\n\nEXECUTION ERROR:\n\n" + run_error

    # clean up
    os.remove(filename)
    if os.path.isfile(executable):
        os.remove(executable)

    return result


def run_python(code, filename, flags):
    """Runs Python code."""

    if not filename:
        filename = str(uuid.uuid4()) + ".py"

    f = open(filename, "w+")
    f.write(code)
    f.close()
    p = subprocess.Popen(["python", filename] + shlex.split(flags, posix=True), stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    p.wait()
    output = p.stdout.read().decode("utf-8")
    error = p.stderr.read().decode("utf-8")

    result = "EXECUTION OUTPUT:\n\n" + output + "\n\nEXECUTION ERROR:\n\n" + error

    # clean up
    os.remove(filename)

    return result