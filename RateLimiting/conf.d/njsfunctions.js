function getclientuniqueid(r)
{
    var clientkey = r.headersIn['authorization'];
    return clientkey;
    
}