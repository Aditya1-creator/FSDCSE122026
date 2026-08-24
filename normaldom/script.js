const root = document.getElementById('container');
const button = document.getElementById('btn');

console.log(root);
console.log(button);

const h2 = document.createElement('h2');
h2.innerHTML = 'Resume Builder';

const loader = document.createElement('h1');

const table = document.createElement('table');

function buildresume() {

    try {

        loader.innerHTML = 'building ...';
        root.appendChild(loader);

        table.setAttribute('border', '1');
        table.style.borderCollapse = 'collapse';
        table.style.margin = '20px auto';
        table.style.width = '500px';

        root.appendChild(h2);

        const row1 = document.createElement('tr');

        const imgcell = document.createElement('td');

        const profileImg = document.createElement('img');

        profileImg.src =
            'https://images.unsplash.com/photo-1786999100475-7fce5e9b60c9?w=600';

        profileImg.setAttribute('width', '100');
        profileImg.setAttribute('height', '100');

        profileImg.style.borderRadius = '50%';

        imgcell.appendChild(profileImg);

        const nameCell = document.createElement('td');

        nameCell.innerHTML = '<h2>Aditya Pandey</h2>';

        row1.appendChild(imgcell);
        row1.appendChild(nameCell);

        table.appendChild(row1);

        const row2 = document.createElement('tr');

        const courseCell = document.createElement('td');

        courseCell.innerHTML =
            '<b>Course:</b> B.Tech CSE';

        const collegeCell = document.createElement('td');

        collegeCell.innerHTML =
            '<b>College:</b> ABES Engineering College';

        row2.appendChild(courseCell);
        row2.appendChild(collegeCell);

        table.appendChild(row2);

        const row3 = document.createElement('tr');

        const skillsCell = document.createElement('td');

        skillsCell.innerHTML =
            '<b>Skills:</b> HTML, CSS, JavaScript';

        const emailCell = document.createElement('td');

        emailCell.innerHTML =
            '<b>Email:</b> aditya@example.com';

        row3.appendChild(skillsCell);
        row3.appendChild(emailCell);

        table.appendChild(row3);

        root.appendChild(table);

    }

    catch (e) {

        console.log(e);
        loader.innerHTML = 'error in building ..';

    }

    finally {

        root.removeChild(loader);

    }
}

button.addEventListener('click', buildresume);