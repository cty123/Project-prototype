let storage = {
    get_values: () => {
        return {
            font_size: localStorage.font_size ? localStorage.font_size : 12,
            theme: localStorage.theme ? localStorage.theme : "monokai",
            controls: (localStorage.controls || localStorage.controls === "") ? localStorage.controls : "",
            language: localStorage.language ? localStorage.language : "c_cpp"
        }
    },
    set_values: (new_values) => {
        for (let key in new_values) {
            if (new_values.hasOwnProperty(key)) {
                localStorage[key] = new_values[key];
            }
        }
    }
};