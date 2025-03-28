import { Column, Entity, Index } from "typeorm";

@Index("pst_permohonan_pkey", ["bundelPelayanan", "kdKantor", "kdKanwil", "noUrutPelayanan", "thnPelayanan"], { unique: true })
@Index("f1_fk", ["kdKantor", "kdKanwil"], {})
@Entity("pst_permohonan", { schema: "public" })
export class PstPermohonan {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

  @Column("character", { primary: true, name: "thn_pelayanan", length: 4 })
  thnPelayanan!: string;

  @Column("character", { primary: true, name: "bundel_pelayanan", length: 4 })
  bundelPelayanan!: string;

  @Column("character", { primary: true, name: "no_urut_pelayanan", length: 3 })
  noUrutPelayanan!: string;

  @Column("character", {
    name: "no_srt_permohonan",
    nullable: true,
    length: 30,
  })
  noSrtPermohonan!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_surat_permohonan",
    nullable: true,
  })
  tglSuratPermohonan!: Date | null;

  @Column("character varying", {
    name: "nama_pemohon",
    nullable: true,
    length: 30,
  })
  namaPemohon!: string | null;

  @Column("character varying", {
    name: "alamat_pemohon",
    nullable: true,
    length: 40,
  })
  alamatPemohon!: string | null;

  @Column("character varying", {
    name: "keterangan_pst",
    nullable: true,
    length: 75,
  })
  keteranganPst!: string | null;

  @Column("character varying", {
    name: "catatan_pst",
    nullable: true,
    length: 75,
  })
  catatanPst!: string | null;

  @Column("character", {
    name: "status_kolektif",
    length: 1,
    default: () => "'0'",
  })
  statusKolektif!: string;

  @Column("timestamp without time zone", {
    name: "tgl_terima_dokumen_wp",
    default: () => "statement_timestamp()",
  })
  tglTerimaDokumenWp!: Date;

  @Column("timestamp without time zone", { name: "tgl_perkiraan_selesai" })
  tglPerkiraanSelesai!: Date;

  @Column("character", { name: "nip_penerima", length: 18 })
  nipPenerima!: string;
}
