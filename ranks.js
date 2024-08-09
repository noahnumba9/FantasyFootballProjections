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
                    ]
                }]
            },
            options:{}
        });