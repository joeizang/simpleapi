import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('business')
export class Business {
  @PrimaryColumn('uuid')
  businessId!: string

  @Column()
  businessName!: string

  @Column()
  businessAddress!: string

  @Column()
  businessPhoneNumber!: string

  @Column()
  businessDescription!: string

  @Column()
  businessLocation!: string

  @CreateDateColumn()
  createdAt!: string

  @UpdateDateColumn()
  updatedAt!: string

  @Column({ 
    type: 'boolean'
  })
  isDeleted!: boolean

  @BeforeInsert()
  generateBusinessId() {
    this.businessId = uuidv4()
  }
}
