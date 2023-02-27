// Retrieve the hostname
var hostname = window.location.hostname;

// Make an AJAX request to retrieve the IP address
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.ipify.org', true);
xhr.onload = function() {
    if (xhr.status === 200) {
        // Retrieve the IP address
        var ip = xhr.responseText;

        // Sum the even numbers in the IP address
        var sum = 0;
        for (var i = 0; i < ip.length; i++) {
            var digit = parseInt(ip[i]);
            if (digit % 2 === 0) {
                sum += digit;
            }
        }

        document.getElementById("ip-address").textContent = "IP Address: " + ip;
        document.getElementById("sum").textContent = "Sum of even numbers in the IP address is: " + sum;

        console.log('IP address:', ip);
        console.log('Sum of even numbers:', sum);
    } else {
        console.error('Error retrieving IP address:', xhr.statusText);
    }
};
xhr.onerror = function() {
    console.error('Error retrieving IP address:', xhr.statusText);
};
xhr.send();
