Chart.defaults.font.size = 20;
Chart.defaults.font.weight = "bold";
let myChart = document.getElementById('myChart').getContext('2d');

        let topRanks = new Chart(myChart, {
            type: 'bar',
            data: {
                labels:['Jets', 'Cowboys', '49ers', 'Ravens', 'Chiefs'],
                datasets:[{
                    label:'Fantasy Points',
                    data:[
                        115,
                        114,
                        112,
                        112,
                        110
                    ],
                    backgroundColor:[
                        'green',
                        'navy',
                        'gold',
                        'purple',
                        'red'
                
                    ],
                    borderWidth:3,
                    borderColor:'black',
                    hoverBorderWidth:5,
                    hoverBorderColor:'pink',
                    color:'red'
                }]
            },
            options:{
                layout:{
                    padding:10
                },
                responsive:false
            }
        });