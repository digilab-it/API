/manuscripts
/manuscripts/model

Resource:{
id: string,
name: string,
uri: string
}

Manuscript{
id: string,
name: string,
related_resource:[
resource1: Resource,
resource2: Resource,
]
}

/manuscripts/id?related_resource=resource1,resource2,resource3

{
id: "id",
name: "name",
related_resource:[
resorce1:{}
]

}

/manuscripts?related_resource=resource1,resource2,resource3&name.in=abc,def
