import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Product {
    @PrimaryGeneratedColumn()
    id : number;
    
    @Column() 
    name: string;
    @Column()
    cost : number;
    @Column({default:true})
    inStock : boolean;
}
