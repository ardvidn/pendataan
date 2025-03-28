import { Column, Entity } from "typeorm";

@Entity("lokasi_pembayaran", { schema: "public" })
export class LokasiPembayaran {
  @Column("character", { name: "kd_kanwil", nullable: true, length: 2 })
  kdKanwil!: string | null;

  @Column("character", { name: "kd_kantor", nullable: true, length: 2 })
  kdKantor!: string | null;

  @Column("character varying", { name: "kd_lp", nullable: true, length: 10 })
  kdLp!: string | null;

  @Column("character varying", { name: "nama_lp", nullable: true, length: 30 })
  namaLp!: string | null;

  @Column("character varying", {
    name: "alamat_lp",
    nullable: true,
    length: 50,
  })
  alamatLp!: string | null;

  @Column("character varying", {
    name: "no_rek_lp",
    nullable: true,
    length: 15,
  })
  noRekLp!: string | null;
}
