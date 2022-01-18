const express = require('express');
const { fork } = require('child_process');
const app = express();
const port = 3000;

app.get('/one', (req, res) => {
    const sum = longComputationTask();
    return res.send(`Sum is ${sum}`);
});

app.get('/two', async (req, res) => {
    const sum = await longComputationTaskAsync();
    return res.send(`Sum is ${sum}`);
});

app.get('/three', (req, res) => {
    const child = fork('./longComputatiionTask.js');
    child.send('start');
    child.on('message', (sum) => {
        return res.send(`Sum is ${sum}`);
    });
});

app.listen(port, () => {
    console.log(`Server started listening on ${port}`);
});

function longComputationTask() {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i;
    }
    return sum;
}

function longComputationTaskAsync() {
    return new Promise((resolve, reject) => {
        try {
            let sum = 0;
            for (let i = 0; i < 1e9; i++) {
                sum += i;
            }
            return resolve(sum);
        } catch (error) {
            return reject(error);
        }
    });
}