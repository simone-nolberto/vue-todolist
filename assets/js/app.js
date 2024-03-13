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

        addTask() {
            const newTodo = { text: this.newTask.text, done: false }

            if (this.newTask.text.length < 3) {
                this.error = "Specifica almeno 4 caratteri!"
                this.newTask.text = '';
            } else {
                this.tasks.unshift(newTodo);
                this.newTask.text = '';
            }


        },

        remove(taskId) {
            this.tasks.splice(taskId, 1);

        },

        check(todo) {
            todo.done = !todo.done;

        },

    },

}).mount('#app')