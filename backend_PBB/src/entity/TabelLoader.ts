import { Column, Entity, Index } from "typeorm";

@Index("tabel_loader_pkey", ["namaTabel"], { unique: true })
@Entity("tabel_loader", { schema: "public" })
export class TabelLoader {
  @Column("character varying", {
    primary: true,
    name: "nama_tabel",
    length: 30,
  })
  namaTabel!: string;

  @Column("character varying", {
    name: "kode_tabel",
    nullable: true,
    length: 30,
  })
  kodeTabel!: string | null;

  @Column("character", { name: "jenis_tabel", nullable: true, length: 1 })
  jenisTabel!: string | null;

  @Column("smallint", { name: "no_urut", nullable: true })
  noUrut!: number | null;

  @Column("smallint", { name: "status_load", nullable: true })
  statusLoad!: number | null;
}
