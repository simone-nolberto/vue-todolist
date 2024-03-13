console.log('it works!');

const { createApp } = Vue
createApp({
    data() {
        return {
            newTask: {
                text: '',
                done: false,
            },
            tasks: [
                {
                    text: 'learn VUE JS',
                    done: true,
                },
                {
                    text: 'learn PHP',
                    done: false,
                },
                {
                    text: 'learn HTML',
                    done: true,
                },
            ],
            style: `text-decoration: line-through`,
            error: null,
        }
    },
    methods: {
        // addTask() {
        //     if (this.newTask.text.length > 3) {
        //         this.tasks.unshift(this.newTask.text);
        //         this.newTask.text = '';
        //         this.error = '';

        //     } else {
        //         this.error = 'Attenzione! Devi inserire almeno 4 caratteri.'
        //         this.newTask = '';
        //     }
        // },
        // remove(taskId) {
        //     this.tasks.splice(taskId, 1)
        // }


    }
}).mount('#app')