import { Column, Entity, Index } from "typeorm";

@Index("dat_op_nopeta_pkey", ["nop"], { unique: true })
@Entity("dat_op_nopeta", { schema: "public" })
export class DatOpNopeta {
  @Column("character", { primary: true, name: "nop", length: 18 })
  nop!: string;
}
