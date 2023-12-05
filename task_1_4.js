function dataAnalyzer(...data){
    let sum = 0;
    let string = '';
    for (let item of data){
        if (parseFloat(item)){
            sum += parseFloat(item);
        } else {
            string === ''? string = item: string += ' ' + item;
        }
    }
    return [sum, string]
}
const result = document.querySelector('#task14')
let testData = dataAnalyzer(8, 'Hello', 33, 'World', -5, '!')
result.innerHTML = `Sum = ${testData[0]}<br>String: ${testData[1]}`;


