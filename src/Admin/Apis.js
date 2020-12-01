const API="http://localhost:5000"


export const  adminaddproject=(data,id)=>{
    return fetch(`${API}/project/${id}`,{
        method:"POST",
        headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
    },
    body:JSON.stringify(data)
    
    },).then(res=>{
        return res.json()
    }).catch(err=>console.log(err))
}

export const admingetproject=(id)=>{
    console.log(id)
    return fetch(`${API}/project/${id}`,
    {method:'GET',}
    )
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))

}
export const admingettask=(id)=>{
    return fetch(`${API}/task/${id}`,
    {method:'GET',}
    )
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))

}

export const adminaddintern=(id,data)=>{
    return fetch(`${API}/interns`,{
        method:"POST",
        headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
    },
    body:JSON.stringify(data)
    
    },).then(res=>{
        return res.json()
    }).catch(err=>console.log(err))

}

export const adminallintern=(id)=>{
    return fetch(`${API}/admin/${id}/allintern`,
    {method:'GET',}
    )
    .then(res=>{

        return res.json()
    })
    .catch(err=>console.log(err))

}


export const adminallproject=(id)=>{
    return fetch(`${API}/admins/${id}/allprojects`,
    {method:'GET',}
    )
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))

}

export const Allinternproject=(id)=>{
    return fetch(`${API}/interns/${id}/allprojects`,
    {method:'GET',}
    )
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))

}

export const getadmin=(gmail)=>{
    return fetch(`${API}/admins/${gmail}`,
    {method:'GET',}
    )
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))

}



export const adminalltask=(id)=>{
    return fetch(`${API}/admins/${id}/alltasks`,
    {method:'GET',}
    )
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))

}

export const adminprojecttasks=(id)=>{
    return fetch(`${API}/admin/projects/${id}/tasks`,
    {method:'GET',}
    )
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))

}

export const addadmin=(data)=>{
    console.log(data)
    
    return fetch(`${API}/admins`,{
        method:"POST",
        headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
    },
    body:JSON.stringify(data)
    
    
    
    },).then(res=>{
        return res.json()
    }).catch(err=>console.log(err))
}


export const adminaddtask=(id,data)=>{
    console.log("task",data)
    
    return fetch(`${API}/admin/projects/${id}/tasks`,{
        method:"POST",
        headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
    },
    body:JSON.stringify(data)
    
    
    
    },).then(res=>{
        console.log(res)
        return res.json()
    }).catch(err=>console.log(err))
}

export const admininterndashboard=(id)=>{
    return fetch(`${API}/interns/${id}/dashboard`,
    {method:'GET',}
    )
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))

}


export const adminupdatetask=(id,task)=>{
    return fetch(`${API}/admin/task/${id}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
        },

    body:JSON.stringify(task)

},).then(res=>{
        console.log(task)
        return res.json()
    }).catch(err=>console.log(err))
}

export const adminupdateproject=(id,proj)=>{
    return fetch(`${API}/admin/task/${id}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
        },

    body:JSON.stringify(proj)

},).then(res=>{
        console.log(proj)
        return res.json()
    }).catch(err=>console.log(err))
}
