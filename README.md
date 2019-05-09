# AdaptiveCircleText
This repo is for adaptive circle which wrap text in a 'just-fit' way.
Basically, you can have your text just wrapped in a circle easily, and the text will fit in the circle just fine!

# Demo 
Try here: https://bofei.io/AdaptiveCircleText/

![demo.gif](demo.gif)

# How to use
1. Include `adjustSize.css` in your HTML.
```html
<link rel="stylesheet" href="adjustSize.css">
```
2. Include `adjustSize.js` in your HTML.
```html
<script src="adjustSize.js"></script>
```
3. Create an element like this and assign an ID: 

```html
<div class="circle" id="yourID">
  <span>
      I am perfectly wrapped in the circle!
  </span>
</div>
```
4. Make a call to `adjustSize('yourID')` and pass the id in. Done!
```html
<script>
    adjustSize('circle');
</script>
```

You can also see [this example](wrapCircleCss.html)

# TODO
- too many words (roughly more than 200) might cause infinite loop

# Contribute
You are welcome to contribute!

# License
["Anti 996" License](LICENSE.txt), do whatever you want if your company does not exploit your employees
