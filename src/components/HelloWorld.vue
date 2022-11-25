<template>
    <div>
        <div>
            <label>Number 1:</label>
            <input v-model="number_1" /><br>
    
            <label>Number 2:</label>
    
            <input v-model="number_2" /><br>
    
            <div>Sum Value: {{sumVal}} </div>
            <div>Sub Value: {{subVal}} </div>
            <div>Mul Value: {{mulVal}} </div>
            <div>Div Value: {{divVal}} </div>
    
        </div>
        <div>
            <button @click="click('1')"> 1 </button>
    
            <button @click="click('2')"> 2 </button>
            <button @click="click('3')"> 3 </button>
            <button @click="click('4')"> 4 </button>
            <button @click="click('5')"> 5 </button>
            <button @click="click('6')"> 6 </button>
            <button @click="click('7')"> 7 </button>
            <button @click="click('8')"> 8 </button>
            <button @click="click('9')"> 9 </button>
            <button @click="click('0')"> 0 </button>
            <button @click="click('+')"> + </button>
            <button @click="click('-')"> - </button>
            <button @click="click('*')"> * </button>
            <button @click="click('/')"> / </button>
            <button @click="clickResult()">=</button>
    
            <div>
                <p>{{ getOperation }}</p>
                <p> {{ getResult }} </p>
            </div>
    
           
        </div>
    
    </div>
    </template>
    
    <script>
    export default {
        name: 'App',
        data() {
            return {
                number_1: 0,
                number_2: 0,
                result: 0,
                getOperation: '',
                getResult: '0',
    
            }
    
        },
        methods: {
            click(val) {
                if (this.getResult == '0') {
                    this.getResult = val;
    
                } else {
                    this.getResult += val;
                }
            },
            clickResult() {
                let operation = this.getResult;
                this.getOperation = operation;
    
                this.getResult = eval(operation);
            }
        },
    
    computed: {
        sumVal() {
            return +this.number_1 + +this.number_2;
        },
    
        subVal() {
            return this.number_1 - this.number_2;
        },
    
        mulVal() {
            return this.number_1 * this.number_2;
        },
    
        divVal() {
            return this.number_1 / this.number_2;
        }
    
    }
    }
    </script>
    