def format(output):
    """Formats the code output to look nicer."""

    result = ""
    for section in output:
        result += "<p><h1 class=\"c-heading u-small\">" + section[0] + "</h1><br />"
        if section[1]:
            result += "<pre class=\"c-code c-code--multiline\">" + section[1] + "</pre>"
        else:
            result += "<em>[none]</em>"
        result += "</p>"

    return result

