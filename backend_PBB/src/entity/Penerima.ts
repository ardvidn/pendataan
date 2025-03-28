import { Column, Entity, Index } from "typeorm";

@Index("penerima_pkey", ["kdPenerima"], { unique: true })
@Entity("penerima", { schema: "public" })
export class Penerima {
  @Column("character", { primary: true, name: "kd_penerima", length: 1 })
  kdPenerima!: string;

  @Column("character varying", { name: "nm_penerima", length: 30 })
  nmPenerima!: string;

  @Column("numeric", { name: "pct_pembagian", precision: 5, scale: 2 })
  pctPembagian!: string;
}
