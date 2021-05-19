class University {
  static contNum = `0222772250`;
  static mail = `registrar@admin.muet.edu.pk`;
  static uniName = `MUET, Jamshoro Sindh Pakistan`;

  constructor(dept, batch) {
    this.dept = dept;
    this.batch = batch;
  }
  static contact() {
    return `For queries\ncontact: ${this.contNum}\nEmail:${this.mail}`;
  }
}
class Student extends University {
  constructor(stdName, rollNo, dept, batch, mail) {
    super(dept, batch);
    this.stdName = stdName;
    this.rollNo = rollNo;
    this.mail = mail;
  }
  welcome() {
    return `Congratulations ${this.stdName}, We welcome you in Department of ${
      this.uniName
    }.\nYou are selected in ${this.dept} in batch ${
      this.batch
    } and your ID is ${this.rollNo}.\n${University.contact()} `;
  }
  stdInfo() {
    return `Name: ${this.stdName}\nId: ${this.rollNo}\nDepartment: ${this.dept}\nBatch: ${this.batch}\nEmail: ${this.mail}`;
  }
}

let saeed = new Student(`Muhammad Saeed`, `18sw123`, `Software Eng`, 18,`mh.saeed.aq@gmail.com`);
console.log(saeed.welcome());
console.log(saeed.stdInfo());
console.log(University.contact());
/* ------------------------Notes------------------------ */

// 1. static methods can be used without creating objects.
// 2. we can only use static variable inside static methods.
// 3. create static methods and variable only for those things which will be common in all objects or for those which are independent of object. 