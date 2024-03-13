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
            // error: null,
        }
    },
    methods: {
        addTask() {
            // if (this.newTask.text.length > 3) {
            //     
            //     
            //     this.error = '';

            // } else {
            //     this.error = 'Attenzione! Devi inserire almeno 4 caratteri.'
            //     this.newTask = '';
            // }

            console.log(this.newTask.text);

            this.tasks.unshift(this.newTask.text, false);
            this.newTask.text = '';

            // function task(text, done) {
            //     this.text = this.newTask.text;
            //     this.done = false;
            // }

            // const newTodo = new task(this.newTask.text, false);
            // this.tasks.unshift(newTodo)


        },

        remove(taskId) {
            this.tasks.splice(taskId, 1)
        },

        check(todo) {
            console.log(todo.done);
            todo.done = !todo.done;

        },

    }
}).mount('#app')