def format(output):
    """Formats the code output to look nicer."""

    result = ""
    for section in output:
        if section[1] and section[1].strip() != "":
            result += "<p><h1 class=\"c-heading u-small\">" + str(format.counter) + ") " + section[0] + "</h1><br />"
            try:
                result += "<pre class=\"c-code c-code--multiline\">" + str(section[1], "utf-8").strip() + "</pre>"
            except:
                result += "<pre class=\"c-code c-code--multiline\">" + section[1].strip() + "</pre>"
            result += "</p>"

    format.counter += 1

    return result


format.counter = 1