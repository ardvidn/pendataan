import { Column, Entity, Index } from "typeorm";

@Index("jenis_hak_pkey", ["kdJnsHak"], { unique: true })
@Entity("jenis_hak", { schema: "public" })
export class JenisHak {
  @Column("character", { primary: true, name: "kd_jns_hak", length: 2 })
  kdJnsHak!: string;

  @Column("character varying", { name: "ket_hak", nullable: true, length: 30 })
  ketHak!: string | null;
}
