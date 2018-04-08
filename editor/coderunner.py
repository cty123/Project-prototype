import subprocess
import uuid
import os


def run_c(code, filename, flags):
    """Runs C code."""

    result = []

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
    result.append(["COMPILER OUTPUT", compile_output + "\n" + compile_error])

    if os.path.isfile(executable):
        p = subprocess.Popen(["./" + executable] + flags, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        p.wait()
        run_output = p.stdout.read().decode("utf-8")
        run_error = p.stderr.read().decode("utf-8")
        result.append(["EXECUTION OUTPUT", run_output + "\n" + run_error])

    # clean up
    os.remove(filename)
    if os.path.isfile(executable):
        os.remove(executable)

    return result


def run_cpp(code, filename, flags):
    """Runs C++ code."""

    result = []

    if filename:
        executable = filename[:-2]
    else:
        executable = str(uuid.uuid4())
        filename = executable + ".cc"

    f = open(filename, "w+")
    f.write(code)
    f.close()
    p = subprocess.Popen(["g++", "-o", executable, filename], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    p.wait()
    compile_output = p.stdout.read().decode("utf-8")
    compile_error = p.stderr.read().decode("utf-8")
    result.append(["COMPILER OUTPUT", compile_output + "\n" + compile_error])

    if os.path.isfile(executable):
        p = subprocess.Popen(["./" + executable] + flags, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        p.wait()
        run_output = p.stdout.read().decode("utf-8")
        run_error = p.stderr.read().decode("utf-8")
        result.append(["EXECUTION OUTPUT", run_output + "\n" + run_error])

    # clean up
    os.remove(filename)
    if os.path.isfile(executable):
        os.remove(executable)

    return result


def run_java(code, filename, flags):
    """Runs Java code."""

    result = []

    if filename:
        executable = filename[:-5]
    else:
        result.append(["ERROR", "Filename required"])
        return result

    f = open(filename, "w+")
    f.write(code)
    f.close()
    p = subprocess.Popen(["javac", filename], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    p.wait()
    compile_output = p.stdout.read().decode("utf-8")
    compile_error = p.stderr.read().decode("utf-8")
    result.append(["COMPILER OUTPUT", compile_output + "\n" + compile_error])
    if os.path.isfile(executable + ".class"):
        p = subprocess.Popen(["java", executable] + flags, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        p.wait()
        run_output = p.stdout.read().decode("utf-8")
        run_error = p.stderr.read().decode("utf-8")
        result.append(["EXECUTION OUTPUT", run_output + "\n" + run_error])

    # clean up
    os.remove(filename)
    if os.path.isfile(executable + ".class"):
        os.remove(executable + ".class")

    return result


def run_python(code, filename, flags):
    """Runs Python code."""

    result = []

    if not filename:
        filename = str(uuid.uuid4()) + ".py"

    f = open(filename, "w+")
    f.write(code)
    f.close()
    p = subprocess.Popen(["python", filename] + flags, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    p.wait()
    run_output = p.stdout.read().decode("utf-8")
    run_error = p.stderr.read().decode("utf-8")

    result.append(["EXECUTION OUTPUT", run_output + "\n" + run_error])

    # clean up
    os.remove(filename)

    return result
