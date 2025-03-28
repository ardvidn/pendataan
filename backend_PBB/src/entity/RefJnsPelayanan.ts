import { Column, Entity, Index } from "typeorm";

@Index("ref_jns_pelayanan_pkey", ["kdJnsPelayanan"], { unique: true })
@Entity("ref_jns_pelayanan", { schema: "public" })
export class RefJnsPelayanan {
  @Column("character", { primary: true, name: "kd_jns_pelayanan", length: 2 })
  kdJnsPelayanan!: string;

  @Column("character varying", { name: "nm_jenis_pelayanan", length: 50 })
  nmJenisPelayanan!: string;
}
