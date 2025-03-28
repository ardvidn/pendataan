import { Column, Entity, Index } from "typeorm";

@Index("g16_1_ak", ["jnsBarangSita", "kdKantor", "kdKanwil", "noBaSita", "noUrutBarangSita"], { unique: true })
@Index("rincian_barang_sita_pkey", ["kdKantor", "kdKanwil", "noBaSita", "noUrutBarangSita"], { unique: true })
@Entity("rincian_barang_sita", { schema: "public" })
export class RincianBarangSita {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character varying", {
    primary: true,
    name: "no_ba_sita",
    length: 30,
  })
  noBaSita!: string;

  @Column("smallint", { primary: true, name: "no_urut_barang_sita" })
  noUrutBarangSita!: number;

  @Column("character", { name: "jns_barang_sita", length: 1 })
  jnsBarangSita!: string;

  @Column("character varying", { name: "nm_barang_sita", length: 30 })
  nmBarangSita!: string;

  @Column("character varying", { name: "al_barang_sita", length: 30 })
  alBarangSita!: string;

  @Column("character varying", { name: "no_sertifikat", length: 30 })
  noSertifikat!: string;

  @Column("timestamp without time zone", { name: "tgl_sertifikat" })
  tglSertifikat!: Date;

  @Column("bigint", { name: "taksiran_harga_barang_sita" })
  taksiranHargaBarangSita!: string;
}
