function roundTwoDecimal(x) {
    return Math.round(x * 100) / 100
}

function handleStreak(summary, status) {
    if (status == "w") {
        // Wins
        if (summary.prev == "w") {
            summary.currW += 1
            summary.currL = 0
        } else {
            summary.prev = "w"
            summary.currW = 1
        }
        // Is it the longest streak?
        if (summary.currW > summary.longestW) {
            summary.longestW = summary.currW
        }
    } else if (status == "l") {
        // Lost
        if (summary.prev == "l") {
            summary.currL += 1
            summary.currW = 0
        } else {
            summary.prev = "l"
            summary.currL = 1
        }
        // Is it the longest streak?
        if (summary.currL > summary.longestL) {
            summary.longestL = summary.currL
        }
    } else {
        // Tie
        if (summary.prev != "t") {
            summary.currW = 0
            summary.currL = 0
        }
    }
}

function calculateSummaryData() {
    let skylerSummary = {"w": 0, "l": 0, "t": 0, "total": 0, 
        "gamesCount": 0, "longestW": 0, "longestL": 0, "currW": 0,
        "currL": 0, "prev": "t"}
    let thuySummary = {"w": 0, "l": 0, "t": 0, "total": 0,
        "gamesCount": 0, "longestW": 0, "longestL": 0, "currW": 0,
        "currL": 0, "prev": "t"}

    for (let i = 0; i < skyler.data.length; i++) {
        if (skyler.data[i] != null && thuy.data[i] != null) {
            if (skyler.data[i] < thuy.data[i]) {
                // Skyler wins
                skylerSummary.w += 1
                thuySummary.l += 1

                handleStreak(skylerSummary, "w")
                handleStreak(thuySummary, "l")
            } else if (skyler.data[i] > thuy.data[i]) {
                // Thuy wins
                skylerSummary.l += 1
                thuySummary.w += 1
                handleStreak(skylerSummary, "l")
                handleStreak(thuySummary, "w")
            } else {
                // Tie
                skylerSummary.t += 1
                thuySummary.t += 1
                handleStreak(skylerSummary, "t")
                handleStreak(thuySummary, "t")
            }
        }

        // for calculating average
        if (skyler.data[i] != null) {
            skylerSummary.gamesCount += 1
            skylerSummary.total += skyler.data[i]
        }
        if (thuy.data[i] != null) {
            thuySummary.gamesCount += 1
            thuySummary.total += thuy.data[i]
        }
    }
    
    // set data
    document.getElementById("skyler-wlt").innerHTML = skylerSummary.w + "/" 
        + skylerSummary.l + "/" + skylerSummary.t
    document.getElementById("skyler-avg").innerHTML = 
        roundTwoDecimal(skylerSummary.total / skylerSummary.gamesCount)
    document.getElementById("skyler-longest-w").innerHTML = skylerSummary.longestW
    document.getElementById("skyler-longest-l").innerHTML = skylerSummary.longestL
    document.getElementById("thuy-wlt").innerHTML = thuySummary.w + "/" 
        + thuySummary.l + "/" + thuySummary.t
    document.getElementById("thuy-avg").innerHTML = 
        roundTwoDecimal(thuySummary.total / thuySummary.gamesCount)
    document.getElementById("thuy-longest-w").innerHTML = thuySummary.longestW
    document.getElementById("thuy-longest-l").innerHTML = thuySummary.longestL
}

calculateSummaryData()