import React from 'react';

const Footer = () => {
    // React.createElement
    return(
        <div className="pt-8 pb-8 px-64 bg-white absolute inset-x-0 bottom-0">
            <div className="flex flex-wrap justify-center">
            <a href="mailto:luc_nguyen@outlook.com"><img alt="email icon" className="hover:animate-bounce hover:opacity-70 mr-24" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACm0lEQVRoge3YTYiNURgH8N/4mEy+Q2IjRmSBDVEioqgpFkJZMKtZMrvZWrIcRZliMXZsKKKokY+iJhtCiIZS8pWPfGTMa3HONbfb3Jn7zr1z7x29/3rq3nOe55z//z3nfd5zHjJkyJAhQ4YMGgp+d2BxjbikxUscQ5LfOB0TsBJ9sbOerS9ynRC5/0MrzqMJC9BbB2SLWW/k2BQ5t+YLaY9O9zAfU3GhDkgX2pW4AnNwK7a1DyUkwQuswEQcrQPyOTuFSViKp3ntRYUk+Igtsa8Nv2sooB+HIpcNeFfQP6yQJJJvi/3b8bkGIr5hZ+RwEL+G8BlRSM46hdS8Cq+qKOIN1sS5j2CgiF/JQhKcwxQsxP0qiHiARWhE9wi+qYQkuIN5mIZLYyjiGmZiNnpK8E8tJMFzLBcy2okxEHEak7EEj0uMGZWQBB+wKcYdxp8KCBgQ3gNYj7cpYkctJMFP7I+xu/G9DBHljlWWkMKnuC7lU8zZe2yMY4x2dcsWkrMzwr5ejEcp4p5hmfC1PlnG/BUTkuA6Zik909zBXOHcdLnMudsJx+BKIDfoJ+EU0D2M7zlsFbZVUqH5/6GcFclPmT1Ya/CSlv81HhAOoQ1YjRvqZGsVS5nfsCu278UP4Yx0ILbtwJfoW/OX/UckCXvi//z+/kgMNkfLke0fYqw9BcKrIiTNU+wSts5EHB/Gr+ofxCdojuS6Soy5ZfA2N5LlhDfHucZESF0fGktNv7mU2YibaCkxbjTYhtuYIaTys2mCS71YvR7Gr9JWsYtVsZRZTctP5fsMndHGVfGhI3JJVXzILwd11lBAoaUqB901WKC7WAfkC+2qkASKFuj+m5LpuC9iT4pCvgpprkVYvvGAFjwUuGfIkCFDhgwZ4C+TfpaAHpO6cwAAAABJRU5ErkJggg=="/></a>
      
            <a href="https://www.github.com/lnguyen87" target="_blank"><img alt="github icon" className="hover:animate-bounce hover:opacity-70 mr-24" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADU0lEQVRoge2Zy0tVQRzHP0dvSbeUQMmSXJQVWAupJKKU2tQqeyBJBqaL2mrraNkisHYR+RdEbYp2FkTLHhJFBtHTsKtCb69PetwWM9fuPZ5zZuacObcW5wuzOTPn+/19Z+Y3M2cOJEiQIAhOTLwpYB2wBkjLZ9PABPAO+BmTbmQ4QCvQDwwB80DOp8wDj2TbFuLrTCOkgT7gDf6Bq8proJe/I1dSOEA3YqqENeAu40AXJRyhWuCORQPuMgisittEM6Ln4jKRL2PA9rhM7AUmS2AiXyalplU0l9hEoRlrI7Ma/+k0CsxZCHhOcnnVZbCQMw7Bid0EVABtwO0QBgaBA5KjSdEu0mrWHUCeBcpc7fdTPHpZ4L0s2YLnY8A+17tlwFSAXldYE2mC94kRn/fqgYN4T4daWVfv8+5IgN44sCyED/oCSIOMRMFbhWavKaGD+tgxbSFwN74qNF9hmCutCsJ82WQlfIEa4LeG5i6vl93JmschDeGHiCS2he/AfY12bSakQwT3yjyw3ihMPTQQ/AmQAx7okqU0yC7bi30Rrii054ByHaKNCiLfeWoJuzX0G3SIVIk+jX9u2UA5MKOIocX9kldAlQqhMcTqEhd+SY0gLIrRy8j/8A2timFRvZeRKQVJHZrJFhIpxO1LELLuB15GVMOaRuRRXNiD+kyV0SFaivob40boMNW4pdCeBZbokt1TkOWADnuxL6BTQ/euCeFZDcJZ4LCV8AWOSE6V7hkT0p0ahDnEMnwJqI5goAZxUtA5MOaAHSbkDvBMkziHOPANIG49KjT4K2TbAcwuNZ4SYnvocZF8RvTGacTu7ifWr8F90SD4wnLC1ASI1SvjIhoGqoB2vKfCE8Q+oEI58NjQxCgGq5UbHR6E52XdOY+64wbcRw2NtIc1kcc1F+EEotfLgAvAD/l8BpG4uqg0MHE1qglkcO4p1llQXw00Eu63wBfUJj4QbVUswhbgE8WjstYCr+pC/COw2YJOEZoRy2xeJINY2eoQC0BjCM4gI9+AbZGj9sFWxB8mL+HxEHx+Rl4irlBjRRVw3UPclpGbwEorkWrAAY4hes6WkReI5f6ffNilgFPAc8IbGQZOoreRlgQbgOXo9agDrEDzNiRBggQJFvAHnEKX7oo2pTEAAAAASUVORK5CYII="/></a>

            <a href="https://www.linkedin.com/in/luctnguyen" target="_blank"><img alt="LinkedIn icon" className="hover:animate-bounce hover:opacity-70 mr-24" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABo0lEQVRoge2ZvUrEQBRGT1SwEdfCWiz0ESzFUsFd1lYUO0ufwUIWfBCfYTs1iqXvYCfq4iImlQhrEUUTZjIz+b24c+A24c7M+chO/hY8Hk9R+kAIxMCk5YqBa6DnGuJcgLyuBrYh+gJkTdW1CRIKEDXVVVY6UASJgAWbxC0SAYt/D6iCTJpxKU3KfaYti6qZ2iBPwD6w/F2HwKhqqarIu1psK/rbulyncN3sHeBdcewtZ0xdlNrsW4pjm8Vd6iXvdI6AI373yAHwbBgj8qclCX8fEY1rkEBTLj13JPeiFWCe5JlpAzgFXh19crHeYJoxOl6AHcPaS8DQ4GBaRylVZZA1m8WBOeDW4NFqEBdWgY+CLkqpuoLMWvRcuLg0fdU6AR6BT+ABOM7pHZZdrK4zsqeZU/f+vV7QpfYgN5o5Q01/R2qQsWbOsaY/cHFxfdZS9WfH2PQUmTd3zNQ+oojFB5GGDyINH0Qa/yaI/4oiDVWQuHELd7KfbZVB7hsQKYuVYw/zi3/btWubeCBAVldntiF+6JL8exoJkI+ASxzOhMfjSfMFRzMGRV1gLKEAAAAASUVORK5CYII="/></a>

            </div>
        </div>
    );
}

export default Footer;