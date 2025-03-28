import { Column, Entity, Index } from "typeorm";

@Index("jns_usaha_pkey", ["kdJnsUsaha"], { unique: true })
@Entity("jns_usaha", { schema: "public" })
export class JnsUsaha {
  @Column("character", { primary: true, name: "kd_jns_usaha", length: 2 })
  kdJnsUsaha!: string;

  @Column("character varying", {
    name: "ket_jns_usaha",
    nullable: true,
    length: 50,
  })
  ketJnsUsaha!: string | null;
}
