let n=1
getPage.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            const array=JSON.parse(request.response)
            array.forEach(item => {
                const li=document.createElement("li")
                li.textContent=item.id
                xxx.appendChild(li)
            });
            n=n+1
        }
    }
    request.send()
}

getJSON.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            console.log(request.response)
            const object=JSON.parse(request.response) //把符合JSON语法的字符串变成对应的对象或其他
            console.log(object)
            myName.textContent=object.name //可用于页面欢迎XXX，这类技术就是使用AJAX请求来的
        }
    }
    request.send()
}

getXML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            const dom=request.responseXML //说明是一个dom对象
            const text=dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}

getHTML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/3.html')
    request.onload=()=>{
        //创建div
        const div=document.createElement('div')
        //填写div内容
        div.innerHTML=request.response
        //插入body里
        document.body.appendChild(div)
    }
    request.onerror=()=>{}
    request.send()
}

getJS.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload=()=>{
        //创建script标签
        const script=document.createElement('script')
        //填写script内容
        script.innerHTML=request.response
        //插入body里
        document.body.appendChild(script)
    }
    request.onerror=()=>{}
    request.send()
}

getCSS.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange=()=>{
        //下载完成，但不知道是成功2xx还是失败4xx 5xx
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
                //创建style标签
                const style=document.createElement('style')
                //填写style内容
                style.innerHTML=request.response
                //插入head里
                document.head.appendChild(style)
            }else{
                alert('加载CSS失败')
            }
            
        }
        
    }
    request.send()
}