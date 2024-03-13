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
        task(text, done) {
            text = this.newTask.text;
            done = false;
        },

        addTask() {

            console.log(this.newTask.text);
            this.newTask.text = '';

            // const newTodo = new this.task(this.newTask.text, false);
            // this.tasks.unshift(newTodo)


        },

        remove(taskId) {
            this.tasks.splice(taskId, 1);

        },

        check(todo) {
            // console.log(todo.done);
            todo.done = !todo.done;

        },

    }
}).mount('#app')