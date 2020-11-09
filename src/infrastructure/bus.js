export default {
    listeners : {},
    addListener(name, callback) {
      if(!this.listeners[name]) {
          this.listeners[name] = [];
      }
      this.listeners[name].push(callback);
    },
    dispatch(evt) {
        if(this.listeners[evt.name]) {
           for(let i in this.listeners[evt.name]) {
               let listener = this.listeners[evt.name][i];
               listener(evt);
           }
        }
    }
}