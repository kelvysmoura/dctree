
export default {

    getItem(key) {
        let result = window.localStorage.getItem(key);
        console.log(result)
        return JSON.parse(result) ?? [];
    },

    setItem(key, value) {
        value = JSON.stringify(value);
        return window.localStorage.setItem(key, value);
    },

    getAccountLinks() {
        return this.getItem('account-links');
    },

    setAccountLinks(links) {
        this.setItem('account-links', links)
    },

    setUiStyle(data) {
        this.setItem('ui-style', data);
    },

    getUiStyle() {
        let result = this.getItem('ui-style');
        let uistyle = {};
        
        Object.entries(result).forEach(item => {
            let [key, value] = item;
        
            if(value === 0 || Number(value)) {
                value += 'px'
            }
        
            uistyle[key] = value
        })

        return uistyle;
    }
}