function parseData(datafile) {
    let data = JSON.parse(datafile)

    let labels = []
    let scoreDataPoints = []

    let i = 0
    while (i < data.length) {
        let label = Object.keys(data[i])[0]
        // did the user miss a day?
        if (i > 0 && parseInt(label) != parseInt(labels[labels.length - 1]) + 1) {
            labels.push((parseInt(labels[labels.length - 1]) + 1).toString())
            scoreDataPoints.push(null)
        } else {
            labels.push(Object.keys(data[i])[0])
            scoreDataPoints.push(Object.values(data[i])[0]["score"])
            i += 1
        }
    }

    const result = {
        "labels": labels,
        "data": scoreDataPoints
    }

    return result
}

skyler = parseData(skylersData)
thuy = parseData(thuysData)


const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: thuy["labels"],
        datasets: [{
            label: "Thuy's Scores",
            data: thuy["data"],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }, {
            label: "Skyler's Scores",
            data: skyler["data"],
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: [
                        'rgba(255, 255, 255, 1)',
                    ],
                    font: {
                        family: "'Source Code Pro', monospace",
                    },
                },
                grid: {
                    color: [
                        'rgba(255, 255, 255, 0.5)',
                    ],
                    lineWidth: 0.5,
                    borderDash: [2],
                },
                reverse: true,
            },
            x: {
                ticks: {
                    color: [
                        'rgba(255, 255, 255, 1)',
                    ],
                    font: {
                        family: "'Source Code Pro', monospace",
                    },
                },
                grid: {
                    color: [
                        'rgba(255, 255, 255, 0.5)',
                    ],
                    lineWidth: 0.5,
                    borderDash: [2],
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        family: "'Source Code Pro', monospace",
                        weight: 500,
                    },
                    color: [
                        'rgba(255, 255, 255, 1)',
                    ]
                }
            }
        }
    }
});
