sequelize model:create --name Person --attributes first_name:string,last_name:string,street:string,city:string,state:string,zip:string,phone:string,email:string

sequelize model:create --name Customoer --attributes preferred_contact_method:string

sequelize model:create --name Vendor --attributes company_name:string

sequelize model:create --name Employoee --attributes start_date:dateonly,end_date:dateonly,salary:float,role:string

sequelize model:create --name Product --attributes product_name:string,description:text,price:float,cost:float,sku:string,upc:integer,quantity:integer

sequelize model:create --name Transaction --attributes quantity:integer,transaction_price:float

sequelize model:create --name Receipt --attributes receipt_timestamp:date
