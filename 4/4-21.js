#모듈을 추가합니다.
fs = require 'fs'

#파일을 읽습니다.
fs.readFile "4/4-14.Folder/textfile.txt", "utf8", (err, data)->
    
    #오류가 발생하면 곧바로 리턴
    return console.log err if err

    console.log data

#파일을 씁니다.
fs.writeFile "4/4-14.Folder/textfile.txt", 'Hello Node 4-21 Updated', 'utf8', (err) ->
    #오류가 발생하면 곧바로 리턴
    return console.log err if err
    
    #원하는 처리
    console.log "File Write Complite"