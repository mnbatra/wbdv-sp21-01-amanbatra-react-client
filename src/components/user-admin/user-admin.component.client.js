var $usernameFld
var $passwordFld
var $firstNameFld
var $lastNameFld
var $tbody
var $roleFld
var $createBtn
var $updateBtn
var $searchBtn
var $userRow
var UserService = new AdminUserServiceClient()

function renderUsers(users) {
    $tbody.empty()
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        $tbody
            .append(`
      <tr class="wbdv-template table-warning wbdv-user wbdv-hidden">
          <td class="text-danger">${user.username}</td>
          <td class="text-danger">&nbsp;</td>
          <td class="text-danger">${user.firstName}</td>
          <td class="text-danger">${user.lastName}</td>
          <td class="text-danger">${user.role}</td>
          <td>             
             <button class="float-right"><i id="${user._id}" class="fa fa-edit wbdv-edit text-dark">&nbsp;Select</i></button>
             <button class="float-right"><i id="${i}" class="fa fa-times wbdv-remove text-dark">&nbsp;Delete</i></button> 
          </td>
      </tr>
      `)
    }
    $(".wbdv-remove").click(deleteUser)
    $(".wbdv-edit").click(selectUser)
}

// Creating the CRUD Functions

//Create User
function createUser() {
    var newUser = {
        username: $usernameFld.val(),
        password: $passwordFld.val(),
        firstName: $firstNameFld.val(),
        lastName: $lastNameFld.val(),
        role: $roleFld.val()
    }

    UserService.createUser(newUser)
        .then(function (actualUser) {
            users.push(actualUser)
            renderUsers(users)
        })

    $usernameFld.val("")
    $passwordFld.val("")
    $firstNameFld.val("")
    $lastNameFld.val("")
    $roleFld.val("")
}


//Read(Select) User

var selectedUser = null

function selectUser(event) {
    var id = $(event.target).attr("id")
    console.log(id)
    selectedUser = users.find(user => user._id === id)
    $usernameFld.val(selectedUser.username)
    $passwordFld.val(selectedUser.password)
    $firstNameFld.val(selectedUser.firstName)
    $lastNameFld.val(selectedUser.lastName)
    $roleFld.val(selectedUser.role)
}

//Update a given user

function updateUser() {
    selectedUser.username = $usernameFld.val()
    selectedUser.password = $passwordFld.val()
    selectedUser.firstName = $firstNameFld.val()
    selectedUser.lastName = $lastNameFld.val()
    selectedUser.role = $roleFld.val()
    UserService.updateUser(selectedUser._id, selectedUser).then(
        status => { var index = users.findIndex(user => user._id === selectedUser._id)
        users[index] = selectedUser
        renderUsers(users)
    })
    $usernameFld.val("")
    $passwordFld.val("")
    $firstNameFld.val("")
    $lastNameFld.val("")
    $roleFld.val("")
}

// Delete a given user

function deleteUser(event) {
    var button = $(event.target)
    var index = button.attr("id")
    var id = users[index]._id
    UserService.deleteUser(id)
        .then(function (status) {
            users.splice(index, 1)
            renderUsers(users)
        })
}

function searchUser() {
    $tbody.empty()
    var results = [];
    var searchVal = $usernameFld.val();
    console.log(searchVal);
    for (var i=0 ; i < users.length ; i++)
    { console.log(users[i].username)
        if (users[i].username == searchVal || searchVal =="") {
            results.push(users[i]);
        }
    }
    renderUsers(results);
}


function main() {
    $searchBtn = jQuery("#wbdv-searchBtn")
    $createBtn = jQuery("#wbdv-createBtn")
    $updateBtn = jQuery("#wbdv-updateBtn")
    $userRow = $(".wbdv-tbody")
    $tbody = $(".wbdv-tbody")
    $usernameFld = $("#usernameFld")
    $passwordFld = $("#passwordFld")
    $firstNameFld = $("#firstNameFld")
    $lastNameFld = $("#lastNameFld")
    $roleFld = $("#roleFld")
    $createBtn.click(createUser)
    $updateBtn.click(updateUser)
    $searchBtn.click(searchUser)
    UserService.findAllUsers().then(function (actualUsers) {
        users = actualUsers
        console.log(users)
        renderUsers(users)
    })
}

$(main)