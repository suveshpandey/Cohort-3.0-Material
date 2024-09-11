## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```


## ans:
const fs= require('fs');

let data = fs.readFile('file.txt', 'utf-8', (err, data)=>{
    if(err) console.log("some error occurred");
    else{
        let ans = data.replace(/\s+/g, " ").trim();
        fs.writeFile('file.txt', ans, (err)=>{
            if(err) console.log("Error!");
            else console.log("Done!")
        })

    }
});
