// bulk renamer is used to rename the huge amount of file with just performing the one rename option.

const fs = require('fs')
const replaceThis = "john";
const replaceWith = "harry"
const path = require('path')
const preview = false;
const folder = __dirname + '/data/'
// dir read will come in the try catch block as it can throw the error which is handled by the catch block.

try {
    let dirRead = () => {
        fs.readdir(folder  , (err, names) => {
            console.log(names)
            for (let index = 0; index < names.length; index++) {
                const item = names[index];
                let newFile = path.join(folder + item.replaceAll(replaceThis, replaceWith));
                let oldfile = path.join(folder + item)
                if (!preview) {
                    fs.rename(oldfile, newFile, () => {
                        console.log("The rename of the item is successfull")
                    })
                } else {
                    if (oldfile !== newFile)
                        console.log("Are you sure want to remane " + " data/" + item + " to the file which is  " + newFile)
                }
            }
        })
    }

    console.log(dirRead())
} catch (error) {
    console.log(error);
}