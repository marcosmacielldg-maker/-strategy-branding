const url = "https://script.google.com/macros/s/AKfycbziC0dic4FQDlnfMUZ2jve-D6aaNR61n7ftvBo0qehbwfYNFxbh_MG9qaFp0NUONQQn/exec";
const data = {name: "Node Test", email: "node@teste.com", phone: "123", q1: "q1", q2: "q2", q3: "q3", q4: "q4", q5: "q5", q6: "q6", q7: "q7"};

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "text/plain",
    },
    body: JSON.stringify(data)
}).then(res => console.log("Success", res.status)).catch(console.error);
