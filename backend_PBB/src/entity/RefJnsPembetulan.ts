import { Column, Entity, Index } from "typeorm";

@Index("ref_jns_pembetulan_pkey", ["kdPembetulan"], { unique: true })
@Entity("ref_jns_pembetulan", { schema: "public" })
export class RefJnsPembetulan {
  @Column("character", { primary: true, name: "kd_pembetulan", length: 2 })
  kdPembetulan!: string;

  @Column("character varying", {
    name: "nm_pembetulan",
    nullable: true,
    length: 100,
  })
  nmPembetulan!: string | null;
}
