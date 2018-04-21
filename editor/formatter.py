def format(output):
    """Formats the code output to look nicer."""

    result = "<div style=\"margin-bottom: 20px\" class=\"c-card\">"
    result += "<header class=\"c-card__header\" style=\"margin-bottom: 10px\"><h2 class=\"c-heading\">Output"
    result += " <a class=\"remove_output\" style=\"cursor: pointer; color: red\">&times;</a></h2></header>"
    for section in output:
        if section[1] and section[1].strip() != "":
            result += "<div style=\"padding-left: 20px\" class=\"c-card__item c-card__item--divider "
            if section[0] == "Execution Output":
                result += "c-card__item--success"
            elif section[0] == "Compiler Output":
                result += "c-card__item--warning"
            elif section[0] == "Error":
                result += "c-card__item--error"
            result += "\">" + section[0] + "</div>"
            result += "<div class=\"c-card__body\">"
            body = section[1]
            try:
                body = str(body, "utf-8").strip()
            except:
                body = body.strip()
            result += "<pre class=\"c-code c-code--multiline\">" + body + "</pre>"
            result += "</div>"
    result += "</div>"

    return result