
exports.mysqli = function(data,row)
{
     k = mysqli[row];    
     for(var i in data)
     {        
     	k = k.replace(new RegExp('{{'+i+'}}', 'g'), data[i]);    	
     }
     return k;
}

var mysqli = [];

mysqli[5]  = 'select * from users';
mysqli['selectuserbyid'] = 'select * from users where id=?'
mysqli['users'] = 'insert into users(name,email,username,phone,street,city,zipcode) values(?,?,?,?,?,?,?)';
mysqli['users_Update'] = 'update users set name=?,email=?,username=?,phone=?,street=?,city=?,zipcode=? where id=?';
mysqli['users_delete'] = 'DELETE FROM users WHERE id = ?';