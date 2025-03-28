import { Column, Entity, Index } from "typeorm";

@Index("jenis_sin_pkey", ["kdJnsSin"], { unique: true })
@Entity("jenis_sin", { schema: "public" })
export class JenisSin {
  @Column("character", { primary: true, name: "kd_jns_sin", length: 2 })
  kdJnsSin!: string;

  @Column("character varying", {
    name: "ket_jns_sin",
    nullable: true,
    length: 30,
  })
  ketJnsSin!: string | null;
}
