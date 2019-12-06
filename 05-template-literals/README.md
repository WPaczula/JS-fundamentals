<div align="center">
    <h1>Template literals</h1>
</div>

How many times did we use something like: `'My age is' + age + 'and my name is' + name`. Fortunatelly we have template literals. It's really no big deal so this one will be quick. Instead of using '/" we write \`. We can use all kinds of things that we would need to prefix with a \ in a normal string. Furthermore we can use variables in there if we wrap them with `${}`. For example:

```
// instead of
'My age is' + age + 'and my name is' + name;

// we can do
`My age is ${age} and my name is ${name}`;
```

Template literals support multi lines as well so you can add them there as well.