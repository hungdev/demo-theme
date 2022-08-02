### Demo theme Dark Mode - ReactJs


Bài toán đưa ra là chỉ có 1 file color, file color này không có dark và light type, và các màn này sử dụng file color này,
không có cặp đối xứng ví dụ như chế độ dark là blue-color: blue-color-dark, và light là blue-color: blue-color-light.

Để xử lý case này cần define cho mỗi màn các màu, và ko được define cho global color vì nếu define cho global color khi build
sẽ bị ghi đè color với nhau, nó sẽ chỉ ăn color ở màn cuối cùng.


Reference: 

```
[https://www.thisdot.co/blog/how-to-implement-a-dark-to-light-mode-feature-in-your-react-sass-project](https://www.thisdot.co/blog/how-to-implement-a-dark-to-light-mode-feature-in-your-react-sass-project)
[https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/](https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/)
[https://github.com/Glacian22/Easy-React-Theming/blob/master/src/index.css](https://github.com/Glacian22/Easy-React-Theming/blob/master/src/index.css)
[https://dev.to/alexeagleson/how-to-create-a-dark-mode-component-in-react-3ibg](https://dev.to/alexeagleson/how-to-create-a-dark-mode-component-in-react-3ibg)
[https://javascript.plainenglish.io/the-best-way-to-add-dark-mode-to-your-react-sass-project-ce3ae3bd8616](https://javascript.plainenglish.io/the-best-way-to-add-dark-mode-to-your-react-sass-project-ce3ae3bd8616)

[https://blog.bitsrc.io/3-ways-to-theme-react-components-9cfa631351e9](https://blog.bitsrc.io/3-ways-to-theme-react-components-9cfa631351e9)


[https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#aa-using-a-body-class](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#aa-using-a-body-class)

key search: integrate darkmode reactjs or theming reactjs


Note: Cái prefers-color-scheme: dark chỉ có tác dụng xác định dark hay light ở hệ thống, 
ý tưởng là dựa vào đó để toggle set class dark hay light vào thẻ dom, 
chứ prefers-color-scheme không có tác dụng switch theme giúp
```