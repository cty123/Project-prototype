import subprocess
import uuid
import os


def run_c(code, filename, flags):
    """Runs C code."""

    result = []

    generated_name = False
    if filename:
        executable = filename[:-2]
    else:
        generated_name = True
        executable = str(uuid.uuid4())
        filename = executable + ".c"

    f = open(filename, "w+")
    f.write(code)
    f.close()

    try:
        compile_output = subprocess.check_output(["gcc", "-o", executable, filename], stderr=subprocess.STDOUT, timeout=5)
        result.append(["Compiler Output", compile_output])
    except subprocess.TimeoutExpired:
        result.append(["Error", "Timeout after 5 seconds"])
    except subprocess.CalledProcessError as e:
        result.append(["Compiler Output", e.output])

    if os.path.isfile(executable):
        try:
            run_output = subprocess.check_output(["./" + executable] + flags, stderr=subprocess.STDOUT, timeout=5)
            result.append(["Execution Output", run_output])
        except subprocess.TimeoutExpired:
            result.append(["Error", "Timeout after 5 seconds"])

    # clean up
    if generated_name:
        os.remove(filename)
    if os.path.isfile(executable):
        os.remove(executable)

    return result


def run_cpp(code, filename, flags):
    """Runs C++ code."""

    result = []

    generated_name = False
    if filename:
        executable = filename[:-2]
    else:
        generated_name = True
        executable = str(uuid.uuid4())
        filename = executable + ".cc"

    f = open(filename, "w+")
    f.write(code)
    f.close()

    try:
        compile_output = subprocess.check_output(["g++", "-o", executable, filename], stderr=subprocess.STDOUT, timeout=5)
        result.append(["Compiler Output", compile_output])
    except subprocess.TimeoutExpired:
        result.append(["Error", "Timeout after 5 seconds"])
    except subprocess.CalledProcessError as e:
        result.append(["Compiler Output", e.output])

    if os.path.isfile(executable):
        try:
            run_output = subprocess.check_output(["./" + executable] + flags, stderr=subprocess.STDOUT, timeout=5)
            result.append(["Execution Output", run_output])
        except subprocess.TimeoutExpired:
            result.append(["Error", "Timeout after 5 seconds"])

    # clean up
    if generated_name:
        os.remove(filename)
    if os.path.isfile(executable):
        os.remove(executable)

    return result


def run_java(code, filename, flags):
    """Runs Java code."""

    result = []

    generated_name = False
    if filename:
        executable = filename[:-5]
    else:
        generated_name = True
        result.append(["Error", "Filename required"])
        return result

    f = open(filename, "w+")
    f.write(code)
    f.close()

    try:
        compile_output = subprocess.check_output(["javac", filename], stderr=subprocess.STDOUT, timeout=5)
        result.append(["Compiler Output", compile_output])
    except subprocess.TimeoutExpired:
        result.append(["Error", "Timeout after 5 seconds"])
    except subprocess.CalledProcessError as e:
        result.append(["Compiler Output", e.output])

    if os.path.isfile(executable + ".class"):
        try:
            run_output = subprocess.check_output(["java", executable] + flags, stderr=subprocess.STDOUT, timeout=5)
            result.append(["Execution Output", run_output])
        except subprocess.TimeoutExpired:
            result.append(["Error", "Timeout after 5 seconds"])

    # clean up
    if generated_name:
        os.remove(filename)
    if os.path.isfile(executable + ".class"):
        os.remove(executable + ".class")

    return result


def run_python(code, filename, flags):
    """Runs Python code."""

    result = []

    generated_name = False
    if not filename:
        generated_name = True
        filename = str(uuid.uuid4()) + ".py"

    f = open(filename, "w+")
    f.write(code)
    f.close()

    try:
        compile_output = subprocess.check_output(["python", filename] + flags, stderr=subprocess.STDOUT, timeout=5)
        result.append(["Execution Output", compile_output])
    except subprocess.TimeoutExpired:
        result.append(["Error", "Timeout after 5 seconds"])
    except subprocess.CalledProcessError as e:
        result.append(["Execution Output", e.output])

    # clean up
    if generated_name:
        os.remove(filename)

    return result
